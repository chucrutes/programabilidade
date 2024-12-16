const sfNumber = 18;
const representor_netdev = "en3f0pf0sf216";
const auxiliary_netdev = "enp3s0f0s216";
const ip = "12.12.12.29";
const subnet = 24;

// sudo su

const txt = `echo mlx5_core.sf.${sfNumber} > /sys/bus/auxiliary/drivers/mlx5_core.sf_cfg/unbind\n
echo mlx5_core.sf.${sfNumber} > /sys/bus/auxiliary/drivers/mlx5_core.sf/bind\n
ovs-vsctl add-port ovsbr1 ${representor_netdev}\n
ifconfig ${auxiliary_netdev} ${ip}/${subnet} up\n
ovs-ofctl add-flow ovsbr1 ip,nw_src=${ip},in_port=${representor_netdev},actions=output:p0\n
ovs-ofctl add-flow ovsbr1 ip,nw_dst=${ip},in_port=p0,actions=output:${representor_netdev}\n
ping -I ${auxiliary_netdev} ${ip}
`;
console.log(txt);
