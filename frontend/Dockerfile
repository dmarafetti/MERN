# syntax=docker/dockerfile:1

FROM node:18.19.1

LABEL mantainer="Diego Marafetti"
LABEL description="MERN stack - Test project"

# prepare working folder
WORKDIR /home
RUN mkdir mern-frontend
COPY src ./mern-frontend/src
COPY package.json ./mern-frontend
COPY tsconfig.json ./mern-frontend
COPY webpack.config.js ./mern-frontend
COPY index.html ./mern-frontend

# build project
WORKDIR mern-frontend
RUN npm install --silent

EXPOSE 8080

# run at start
ENTRYPOINT ["npm"]
CMD ["run", "server"]


# enable container checking status

#HEALTHCHECK --interval=5m \
#            --timeout=20s \
#            CMD curl -f http://localhost:3001 || exit 1

