---
sidebar_label: 'Private Cluster'
sidebar_position: 5
---
# Private Cluster

It is possible to run Bacalhau completely disconnected from the main Bacalhau network, so that you can run private workloads without risking running on public nodes or inadvertantly sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to the public IPFS network. To do this, we will run IPFS in-process rather than externally.

:::info
The in-process IPFS is easier to set up, but a separate IPFS server is better for production. The in-process IPFS will use a temporary directory for its repository and so the contents will be lost on shutdown.
:::

## Initial Requester Node

The first step is to start up the initial node, which we will use as the `requester node`. This node will connect to nothing but will listen for connections.

```bash
bacalhau serve --node-type requester --private-internal-ipfs --peer none
```

This will produce output similar to this:

```
16:34:17.154 | INF pkg/libp2p/host.go:69 > started libp2p host [host-id:QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE] [listening-addresses:["/ip4/192.168.1.224/tcp/1235","/ip4/127.0.0.1/tcp/1235","/ip4/192.168.1.224/udp/1235/quic","/ip4/127.0.0.1/udp/1235/quic","/ip6/::1/tcp/1235","/ip6/::1/udp/1235/quic"]] [p2p-addresses:["/ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/127.0.0.1/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/192.168.1.224/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/127.0.0.1/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip6/::1/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip6/::1/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE"]]
16:34:17.555 | INF cmd/bacalhau/serve.go:506 > Internal IPFS node available [NodeID:QmWg7m5G] [ipfs_swarm_addresses:["/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2","/ip4/127.0.0.1/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2"]]

To connect another node to this private one, run the following command in your shell:
bacalhau serve --private-internal-ipfs --peer /ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE --ipfs-swarm-addr /ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2

To use this requester node from the client, run the following commands in your shell:
export BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2
export BACALHAU_API_HOST=0.0.0.0
export BACALHAU_API_PORT=1234
```

## Compute Nodes

To connect another node to this private one, run the following command in your shell:

```
bacalhau serve --private-internal-ipfs --peer /ip4/<ip-address>/tcp/1235/p2p/<peer-id> --ipfs-swarm-addr /ip4/<ip-address>/tcp/<port>/p2p/<peer-id>
```

:::tip
The exact command will be different on each computer and is outputted by the `bacalhau serve --node-type requester ...` command
:::

The command `bacalhau serve --private-internal-ipfs --peer ...` starts up a compute node and adds it to the cluster.

## Submitting Jobs

To use this cluster from the client, run the following commands in your shell:

```
export BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/<ip-address>/tcp/<port>/p2p/<peer-id>
export BACALHAU_API_HOST=0.0.0.0
export BACALHAU_API_PORT=1234
```

:::tip
The exact command will be different on each computer and is outputted by the `bacalhau serve --node-type requester ...` command
:::

The command `export BACALHAU_IPFS_SWARM_ADDRESSES=...` sends jobs into the cluster from the command line client.
