FROM golang:1.21.2
WORKDIR /app
COPY . .
RUN go mod download
# COPY *.go ./
RUN go build -o /docker-go-template
EXPOSE 7000
ENTRYPOINT ["/docker-go-template"]