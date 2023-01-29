from golang as builder
WORKDIR /go/src/app
COPY hello.go .
RUN go build hello.go

from scratch
WORKDIR /var
COPY --from=builder /go/src/app/hello .
CMD [ "./hello" ]

