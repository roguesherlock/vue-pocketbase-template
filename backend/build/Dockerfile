FROM golang:1.19-buster AS builder
WORKDIR /src

ENV GOPROXY=https://proxy.golang.org|direct
COPY go.mod go.sum ./
RUN go mod download -x

COPY . ./
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-X 'main.release=`git rev-parse --short=8 HEAD`'" -o /bin/server cmd/server/*.go

# FROM gcr.io/distroless/base-debian11
FROM debian:latest
WORKDIR /app

COPY --from=builder /bin/server ./

EXPOSE 8080

CMD ["./server",  "serve", "--http=0.0.0.0:8080"]