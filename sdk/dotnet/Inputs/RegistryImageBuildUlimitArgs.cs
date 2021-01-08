// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class RegistryImageBuildUlimitArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// - hard limit
        /// </summary>
        [Input("hard", required: true)]
        public Input<int> Hard { get; set; } = null!;

        /// <summary>
        /// type of ulimit, e.g. nofile
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// - soft limit
        /// </summary>
        [Input("soft", required: true)]
        public Input<int> Soft { get; set; } = null!;

        public RegistryImageBuildUlimitArgs()
        {
        }
    }
}