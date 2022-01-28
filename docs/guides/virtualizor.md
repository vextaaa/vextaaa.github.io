# Installer Virtualizor

:::warning Attention
L'installation de Virtualizor dépend en partit du fournisseur ! Cet documentation est faite pour OVH.
:::

## Système d'exploitation

:::warning Chez OVH il est fortement recommandé d'utilisé Ubuntu 20.04 !
Vous pouvez mettre d'autre OS mais cela sera moin facile, dans cet documentation nous allons vous montrez pour Ubuntu.
:::
Une fois que vous avez votre OS en tête passer a l'étape juste après.

## Partitions

Pour un bon fonctionnement de Virtualizor il est necéssaire de définir correctement les partitions.

:::tip Ce que je conseil :
Tout mettre dans le `/`                                         
Mettre 4Go ou plus de SWAP
:::


## Installations du Panel (KVM)

Pour cela vous devez executez ces commandes (officiel) :

```bash
wget -N http://files.virtualizor.com/install.sh 
chmod 0755 install.sh 
./install.sh email=your@email.com kernel=kvm 
```
:::tip Recommandé
Le serveur va vous demandez si vous voulez redemarrez mettez `Y` et attendez que votre serveur redémarre.
:::

## Configuration du disque sur le panel

Si vous avez correctement suivi la partit sur la partitions, vous avez juste a faire `mkdir /vps` puis ajouté un disque en Files sur `/vps`

## Configuration du Réseau

**1.** L'étape qui viens après le disque est le réseau, pour cela vous devez faire :
```bash
nano /etc/network/interfaces
```

**2.** Ensuite vous devez ajouté ces ligne :

```
adress [ip de votre dédié]
netmask 255.255.255.0
gateway x.x.x.254
```
:::tip Conseil
Pour le gateway vous devez mettre l'ip de votre dédié par exemple `1.2.3.4` avec `254` a la fin, ca vous donnera : `1.2.3.254`
:::

Ensuite sauvgarder le fichier en fesant `ctrl`+`x` ensuite `Y` et `entrer`.


**3.** Après avoir fait cela vous devez faire `ìp a` pour connaire le nom de l'interface réseau utilisé par le serveur.

**4.** Une fois celui-ci trouvé vous devez faire cet commande :
```bash
sudo route add default gw x.x.x.254 [interface reseau]
```

:::tip Important
Vous devez modifié le nom de l'interface réseau par celle trouvé juste avant et modifié l'ip par votre gateway.
:::

**5.** Une fois cela fait il suffi de faire
```bash
service virtnetwork restart
```
