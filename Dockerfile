FROM node:22-alpine AS build

WORKDIR /app

ARG NEXT_PUBLIC_SITE_ENV=preview
ARG NEXT_PUBLIC_SITE_URL=https://new.drtammiquek.com
ARG NEXT_PUBLIC_KIMI_URL=https://www.kimi.com/
ARG NEXT_PUBLIC_ENQUIRY_URL=https://drtammiquek.com/paediatrics-clinic/contact/

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SITE_ENV=$NEXT_PUBLIC_SITE_ENV
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_KIMI_URL=$NEXT_PUBLIC_KIMI_URL
ENV NEXT_PUBLIC_ENQUIRY_URL=$NEXT_PUBLIC_ENQUIRY_URL

COPY package.json ./
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run typecheck && npm run build

FROM nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
