FROM swr.cn-south-1.myhuaweicloud.com/horizonpay/node:20.5.1 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install  --registry=https://registry.npmmirror.com
#RUN npm install  --registry=https://registry.yarnpkg.com


RUN echo "build TENANTID $TENANTID for "
RUN echo "build ENVNAME $ENVNAME for "
COPY . .

RUN npm run build


FROM swr.cn-south-1.myhuaweicloud.com/horizonpay/node:20.5.1 AS  runner
WORKDIR /app

ENV NODE_ENV production
# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000
ENV PORT 3000

# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]

#ENV NODE_OPTIONS="--openssl-legacy-provider"