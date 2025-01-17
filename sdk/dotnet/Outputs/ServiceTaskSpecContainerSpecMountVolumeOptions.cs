// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Outputs
{

    [OutputType]
    public sealed class ServiceTaskSpecContainerSpecMountVolumeOptions
    {
        public readonly string? DriverName;
        public readonly ImmutableDictionary<string, string>? DriverOptions;
        public readonly ImmutableArray<Outputs.ServiceTaskSpecContainerSpecMountVolumeOptionsLabel> Labels;
        public readonly bool? NoCopy;

        [OutputConstructor]
        private ServiceTaskSpecContainerSpecMountVolumeOptions(
            string? driverName,

            ImmutableDictionary<string, string>? driverOptions,

            ImmutableArray<Outputs.ServiceTaskSpecContainerSpecMountVolumeOptionsLabel> labels,

            bool? noCopy)
        {
            DriverName = driverName;
            DriverOptions = driverOptions;
            Labels = labels;
            NoCopy = noCopy;
        }
    }
}
