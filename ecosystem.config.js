module.exports = {
    apps : [
        {
            name: "config-server",
            script: "java",
            args: ["-jar", "./config-server/target/Config-Server-1.0.0.jar"],
            log_file: "./config-server/logs/config-server.log"
        },
        {
            name: "service-registry",
            script: "java",
            args: ["-jar", "./service-registry/target/service-registry-1.0.0.jar"],
            log_file: "./service-registry/logs/service-registry.log"
        },
        {
            name: "api-gateway",
            script: "java",
            args: ["-jar", "./api-gateway/target/Api-Gateway-1.0.0.jar"],
            log_file: "./api-gateway/logs/api-gateway.log"
        }
    ]
};