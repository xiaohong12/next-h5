FROM swr.cn-south-1.myhuaweicloud.com/horizonpay/node:20-alpine as base 
COPY . .
RUN npm install --registry=https://registry.npmmirror.com
EXPOSE 8000
RUN npm run build
#CMD ["npm", "run", "dev"]
FROM swr.cn-south-1.myhuaweicloud.com/horizonpay/nginx:alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist/ /tpayment/
