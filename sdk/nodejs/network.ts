// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * <!-- Bug: Type and Name are switched -->
 * `docker.Network` provides details about a specific Docker Network.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 *
 * const privateNetwork = new docker.Network("private_network", {});
 * ```
 *
 * <!-- schema generated by tfplugindocs -->
 * ## Schema
 *
 * ### Required
 *
 * - **name** (String) The name of the Docker network.
 *
 * ### Optional
 *
 * - **attachable** (Boolean) Enable manual container attachment to the network.
 * - **check_duplicate** (Boolean) Requests daemon to check for networks with same name.
 * - **driver** (String) The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
 * - **id** (String) The ID of this resource.
 * - **ingress** (Boolean) Create swarm routing-mesh network. Defaults to `false`.
 * - **internal** (Boolean) Whether the network is internal.
 * - **ipam_config** (Block Set) The IPAM configuration options (see below for nested schema)
 * - **ipam_driver** (String) Driver used by the custom IP scheme of the network. Defaults to `default`
 * - **ipv6** (Boolean) Enable IPv6 networking. Defaults to `false`.
 * - **labels** (Block Set) User-defined key/value metadata (see below for nested schema)
 * - **options** (Map of String) Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
 *
 * ### Read-Only
 *
 * - **scope** (String) Scope of the network. One of `swarm`, `global`, or `local`.
 *
 * <a id="nestedblock--ipam_config"></a>
 * ### Nested Schema for `ipamConfig`
 *
 * Optional:
 *
 * - **aux_address** (Map of String) Auxiliary IPv4 or IPv6 addresses used by Network driver
 * - **gateway** (String) The IP address of the gateway
 * - **ip_range** (String) The ip range in CIDR form
 * - **subnet** (String) The subnet in CIDR form
 *
 * <a id="nestedblock--labels"></a>
 * ### Nested Schema for `labels`
 *
 * Required:
 *
 * - **label** (String) Name of the label
 * - **value** (String) Value of the label
 *
 * ## Import
 *
 * ### Example Assuming you created a `network` as follows #!/bin/bash docker network create foo # prints the long ID 87b57a9b91ecab2db2a6dbf38df74c67d7c7108cbe479d6576574ec2cd8c2d73 you provide the definition for the resource as follows terraform resource "docker_network" "foo" {
 *
 *  name = "foo" } then the import command is as follows #!/bin/bash
 *
 * ```sh
 *  $ pulumi import docker:index/network:Network foo 87b57a9b91ecab2db2a6dbf38df74c67d7c7108cbe479d6576574ec2cd8c2d73
 * ```
 */
export class Network extends pulumi.CustomResource {
    /**
     * Get an existing Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkState, opts?: pulumi.CustomResourceOptions): Network {
        return new Network(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'docker:index/network:Network';

    /**
     * Returns true if the given object is an instance of Network.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Network {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Network.__pulumiType;
    }

    /**
     * Enable manual container attachment to the network.
     */
    public readonly attachable!: pulumi.Output<boolean | undefined>;
    /**
     * Requests daemon to check for networks with same name.
     */
    public readonly checkDuplicate!: pulumi.Output<boolean | undefined>;
    /**
     * The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network
     * docs](https://docs.docker.com/network/#network-drivers) for more details.
     */
    public readonly driver!: pulumi.Output<string>;
    /**
     * Create swarm routing-mesh network. Defaults to `false`.
     */
    public readonly ingress!: pulumi.Output<boolean | undefined>;
    /**
     * Whether the network is internal.
     */
    public readonly internal!: pulumi.Output<boolean>;
    /**
     * The IPAM configuration options
     */
    public readonly ipamConfigs!: pulumi.Output<outputs.NetworkIpamConfig[]>;
    /**
     * Driver used by the custom IP scheme of the network. Defaults to `default`
     */
    public readonly ipamDriver!: pulumi.Output<string | undefined>;
    /**
     * Enable IPv6 networking. Defaults to `false`.
     */
    public readonly ipv6!: pulumi.Output<boolean | undefined>;
    /**
     * User-defined key/value metadata
     */
    public readonly labels!: pulumi.Output<outputs.NetworkLabel[] | undefined>;
    /**
     * The name of the Docker network.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Only available with bridge networks. See [bridge options
     * docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
     */
    public readonly options!: pulumi.Output<{[key: string]: any}>;
    /**
     * Scope of the network. One of `swarm`, `global`, or `local`.
     */
    public /*out*/ readonly scope!: pulumi.Output<string>;

    /**
     * Create a Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkArgs | NetworkState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkState | undefined;
            inputs["attachable"] = state ? state.attachable : undefined;
            inputs["checkDuplicate"] = state ? state.checkDuplicate : undefined;
            inputs["driver"] = state ? state.driver : undefined;
            inputs["ingress"] = state ? state.ingress : undefined;
            inputs["internal"] = state ? state.internal : undefined;
            inputs["ipamConfigs"] = state ? state.ipamConfigs : undefined;
            inputs["ipamDriver"] = state ? state.ipamDriver : undefined;
            inputs["ipv6"] = state ? state.ipv6 : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["options"] = state ? state.options : undefined;
            inputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as NetworkArgs | undefined;
            inputs["attachable"] = args ? args.attachable : undefined;
            inputs["checkDuplicate"] = args ? args.checkDuplicate : undefined;
            inputs["driver"] = args ? args.driver : undefined;
            inputs["ingress"] = args ? args.ingress : undefined;
            inputs["internal"] = args ? args.internal : undefined;
            inputs["ipamConfigs"] = args ? args.ipamConfigs : undefined;
            inputs["ipamDriver"] = args ? args.ipamDriver : undefined;
            inputs["ipv6"] = args ? args.ipv6 : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["options"] = args ? args.options : undefined;
            inputs["scope"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Network.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Network resources.
 */
export interface NetworkState {
    /**
     * Enable manual container attachment to the network.
     */
    readonly attachable?: pulumi.Input<boolean>;
    /**
     * Requests daemon to check for networks with same name.
     */
    readonly checkDuplicate?: pulumi.Input<boolean>;
    /**
     * The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network
     * docs](https://docs.docker.com/network/#network-drivers) for more details.
     */
    readonly driver?: pulumi.Input<string>;
    /**
     * Create swarm routing-mesh network. Defaults to `false`.
     */
    readonly ingress?: pulumi.Input<boolean>;
    /**
     * Whether the network is internal.
     */
    readonly internal?: pulumi.Input<boolean>;
    /**
     * The IPAM configuration options
     */
    readonly ipamConfigs?: pulumi.Input<pulumi.Input<inputs.NetworkIpamConfig>[]>;
    /**
     * Driver used by the custom IP scheme of the network. Defaults to `default`
     */
    readonly ipamDriver?: pulumi.Input<string>;
    /**
     * Enable IPv6 networking. Defaults to `false`.
     */
    readonly ipv6?: pulumi.Input<boolean>;
    /**
     * User-defined key/value metadata
     */
    readonly labels?: pulumi.Input<pulumi.Input<inputs.NetworkLabel>[]>;
    /**
     * The name of the Docker network.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Only available with bridge networks. See [bridge options
     * docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
     */
    readonly options?: pulumi.Input<{[key: string]: any}>;
    /**
     * Scope of the network. One of `swarm`, `global`, or `local`.
     */
    readonly scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Network resource.
 */
export interface NetworkArgs {
    /**
     * Enable manual container attachment to the network.
     */
    readonly attachable?: pulumi.Input<boolean>;
    /**
     * Requests daemon to check for networks with same name.
     */
    readonly checkDuplicate?: pulumi.Input<boolean>;
    /**
     * The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network
     * docs](https://docs.docker.com/network/#network-drivers) for more details.
     */
    readonly driver?: pulumi.Input<string>;
    /**
     * Create swarm routing-mesh network. Defaults to `false`.
     */
    readonly ingress?: pulumi.Input<boolean>;
    /**
     * Whether the network is internal.
     */
    readonly internal?: pulumi.Input<boolean>;
    /**
     * The IPAM configuration options
     */
    readonly ipamConfigs?: pulumi.Input<pulumi.Input<inputs.NetworkIpamConfig>[]>;
    /**
     * Driver used by the custom IP scheme of the network. Defaults to `default`
     */
    readonly ipamDriver?: pulumi.Input<string>;
    /**
     * Enable IPv6 networking. Defaults to `false`.
     */
    readonly ipv6?: pulumi.Input<boolean>;
    /**
     * User-defined key/value metadata
     */
    readonly labels?: pulumi.Input<pulumi.Input<inputs.NetworkLabel>[]>;
    /**
     * The name of the Docker network.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Only available with bridge networks. See [bridge options
     * docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
     */
    readonly options?: pulumi.Input<{[key: string]: any}>;
}
