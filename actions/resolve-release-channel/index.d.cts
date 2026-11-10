interface ReleaseChannel {
    channel: string;
    isLatest: boolean;
}
interface ResolveReleaseChannelRequest {
    branch: string;
    defaultBranch: string;
}
declare function resolveReleaseChannel(request: ResolveReleaseChannelRequest): ReleaseChannel;

export { type ReleaseChannel, type ResolveReleaseChannelRequest, resolveReleaseChannel };
