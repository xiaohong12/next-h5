FROM swr.cn-south-1.myhuaweicloud.com/horizonpay/node:20-alpine as base 
WORKDIR /app
COPY package.json ./
RUN npm install  --registry=https://registry.npmmirror.com
RUN npm run build
FROM swr.cn-south-1.myhuaweicloud.com/horizonpay/node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
ENV PORT 3000

CMD ["node_modules/.bin/next", "start"]