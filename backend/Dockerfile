# syntax=docker/dockerfile:1

FROM node:18.19.1

LABEL mantainer="Diego Marafetti"
LABEL description="MERN stack - Test project"

# prepare working folder
WORKDIR /home
RUN mkdir mern-backend
COPY src ./mern-backend/
COPY package.json ./mern-backend

# build project
WORKDIR mern-backend
RUN npm install --silent

# run at start
ENTRYPOINT ["npm"]
CMD ["run", "server"]


# enable container checking status

#HEALTHCHECK --interval=5m \
#            --timeout=20s \
#            CMD curl -f http://localhost:3001 || exit 1

