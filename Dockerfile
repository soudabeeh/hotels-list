FROM node:18.12-alpine as builder
RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /app
RUN npm run build

FROM node:18.12-alpine AS runner 
WORKDIR /app
COPY --from=builder /app/dist /app/dist
RUN npm install -g serve
EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]


