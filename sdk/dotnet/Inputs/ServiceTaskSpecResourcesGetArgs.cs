// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ServiceTaskSpecResourcesGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes the resources which can be advertised by a node and requested by a task.
        /// * `nano_cpus` (Optional, int) CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000
        /// * `memory_bytes` (Optional, int) The amount of memory in bytes the container allocates
        /// * `generic_resources` (Optional, map) User-defined resources can be either Integer resources (e.g, SSD=3) or String resources (e.g, GPU=UUID1)
        /// * `named_resources_spec` (Optional, set of string) The String resources, delimited by `=`
        /// * `discrete_resources_spec` (Optional, set of string) The Integer resources, delimited by `=`
        /// </summary>
        [Input("limits")]
        public Input<Inputs.ServiceTaskSpecResourcesLimitsGetArgs>? Limits { get; set; }

        /// <summary>
        /// An object describing the resources which can be advertised by a node and requested by a task.
        /// * `nano_cpus` (Optional, int) CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000
        /// * `memory_bytes` (Optional, int) The amount of memory in bytes the container allocates
        /// * `generic_resources` (Optional, map) User-defined resources can be either Integer resources (e.g, SSD=3) or String resources (e.g, GPU=UUID1)
        /// * `named_resources_spec` (Optional, set of string) The String resources
        /// * `discrete_resources_spec` (Optional, set of string) The Integer resources
        /// </summary>
        [Input("reservation")]
        public Input<Inputs.ServiceTaskSpecResourcesReservationGetArgs>? Reservation { get; set; }

        public ServiceTaskSpecResourcesGetArgs()
        {
        }
    }
}