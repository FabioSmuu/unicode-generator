# Repositorio gerador ascii simples.

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/Snooh)

> **AVISO:** Não me responsabiliso pelo uso indevido desta simples função, pois a criei para estudo de pacotes em ambientes controlados.


Caso não saiba onde é usar ascii hoje em dia, aqui esta um json contendo os emojis originais do discord: [emojis.sjon](/emojis.sjon)
Me dei o trabalho de também separar o nome de todos os emojis individuais: [nomes.txt](/nomes.txt)

##### Exemplo de uso:
- Retorna 3 ascii aleatorio de code 7 a 13:
```js
console.log(new chars(7, 13).gerar(3))
```


- Retorna 8 ascii de codigo 11003:
```js
let code = 11003
let contia = 8
new chars(code).gerar(contia)
```
- Retorna 1 ascii aleatorio:
```js
let ascii = new chars().gerar()
console.log(ascii)
```
- Retorna 2000 ascii aleatorios:
```js
return new chars().gerar(2000)
```

**Obrigado pela sua atenção!**
	
