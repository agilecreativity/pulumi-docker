// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export * from "./container";
export * from "./docker";
export * from "./getNetwork";
export * from "./getPlugin";
export * from "./getRegistryImage";
export * from "./getRemoteImage";
export * from "./image";
export * from "./network";
export * from "./plugin";
export * from "./provider";
export * from "./registryImage";
export * from "./remoteImage";
export * from "./secret";
export * from "./service";
export * from "./serviceConfig";
export * from "./utils";
export * from "./volume";

// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

// Import resources to register:
import { Container } from "./container";
import { Network } from "./network";
import { Plugin } from "./plugin";
import { RegistryImage } from "./registryImage";
import { RemoteImage } from "./remoteImage";
import { Secret } from "./secret";
import { Service } from "./service";
import { ServiceConfig } from "./serviceConfig";
import { Volume } from "./volume";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "docker:index/container:Container":
                return new Container(name, <any>undefined, { urn })
            case "docker:index/network:Network":
                return new Network(name, <any>undefined, { urn })
            case "docker:index/plugin:Plugin":
                return new Plugin(name, <any>undefined, { urn })
            case "docker:index/registryImage:RegistryImage":
                return new RegistryImage(name, <any>undefined, { urn })
            case "docker:index/remoteImage:RemoteImage":
                return new RemoteImage(name, <any>undefined, { urn })
            case "docker:index/secret:Secret":
                return new Secret(name, <any>undefined, { urn })
            case "docker:index/service:Service":
                return new Service(name, <any>undefined, { urn })
            case "docker:index/serviceConfig:ServiceConfig":
                return new ServiceConfig(name, <any>undefined, { urn })
            case "docker:index/volume:Volume":
                return new Volume(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("docker", "index/container", _module)
pulumi.runtime.registerResourceModule("docker", "index/network", _module)
pulumi.runtime.registerResourceModule("docker", "index/plugin", _module)
pulumi.runtime.registerResourceModule("docker", "index/registryImage", _module)
pulumi.runtime.registerResourceModule("docker", "index/remoteImage", _module)
pulumi.runtime.registerResourceModule("docker", "index/secret", _module)
pulumi.runtime.registerResourceModule("docker", "index/service", _module)
pulumi.runtime.registerResourceModule("docker", "index/serviceConfig", _module)
pulumi.runtime.registerResourceModule("docker", "index/volume", _module)

import { Provider } from "./provider";

pulumi.runtime.registerResourcePackage("docker", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:docker") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
