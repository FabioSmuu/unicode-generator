# Repositorio gerador unicode simples.

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)

> **AVISO:** Este projeto foi criado somente para estudo da geração de unicode e não para uso prático!

### Arquivos
- [code.js](/code.js): Código do gerador.
- [emoji.json](/emoji.json): Lista da estrutura de emojis do discord.
- [nomes.txt](/nomes.txt): Lista dos nomes dos emojis.
- [unicode.txt](/unicode.txt): Lista dos emojis unicode.

##### Exemplo de uso:
- Retorna 3 unicode's aleatórios de code 7 a 13:
```js
console.log(new chars(7, 13).gerar(3))
```


- Retorna 8 unicode's de código 11003:
```js
let code = 11003
let contia = 8
new chars(code).gerar(contia)
```
- Retorna 1 unicode aleatório:
```js
let code = new chars().gerar()
console.log(code)
```
- Retorna 2000 unicode's aleatórios:
```js
return new chars().gerar(2000)
```

**Obrigado pela sua atenção!**
	
