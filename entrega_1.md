# Virtualização

- Virtualização utilizando utm(https://mac.getutm.app)
- Criar uma máquina virtual pelo UTM e uma distribuição de imagem linux(22.04.4 - https://cdimage.ubuntu.com/releases/22.04/release/) compatível com ARM
- Alocação de memória e armazenamento para a máquina virtual
- Executar a máquina virtual e instalar o ubuntu
- Selecionar reboot now, após a instalação
- Parar a máquina
- Remover o iso nas configurações de boot

# Instalação Wireshark

- `sudo apt update`
- `sudo apt full-upgrade`
- `git clone https://github.com/mininet/mininet`

```
git tag
git checkout  2.3.0
cd ..
```

- `mininet/util/install.sh`

```
sudo apt-get install openvswitch-switch
sudo service openvswitch-switch start
```
