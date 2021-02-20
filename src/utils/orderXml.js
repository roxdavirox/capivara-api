const fs = require('fs')

const createXml = ({

}) => `
  <?xml version="1.0" encoding="UTF-8"?>
  <pedido>
  <cliente>
  <nome>Organisys Software</nome>
  <tipoPessoa>J</tipoPessoa>
  <endereco>Rua Visconde de São Gabriel</endereco>
  <cpf_cnpj>00000000000000</cpf_cnpj>
  <ie>3067663000</ie>
  <numero>392</numero>
  <complemento>Sala 54</complemento>
  <bairro>Cidade Alta</bairro>
  <cep>95.700-000</cep>
  <cidade>Bento Gonçalves</cidade>
  <uf>RS</uf>
  <fone>5481153376</fone>
  <email>teste@teste.com.br</email>
  </cliente>
  <transporte>
  <transportadora>Transportadora XYZ</transportadora>
  <tipo_frete>R</tipo_frete>
  <servico_correios>SEDEX - CONTRATO</servico_correios>
  <dados_etiqueta>
  <nome>Endereço de entrega</nome>
  <endereco>Rua Visconde de São Gabriel</endereco>
  <numero>392</numero>
  <complemento>Sala 59</complemento>
  <municipio>Bento Gonçalves</municipio>
  <uf>RS</uf>
  <cep>95.700-000</cep>
  <bairro>Cidade Alta</bairro>
  </dados_etiqueta>
  <volumes>
  <volume>
  <servico>SEDEX - CONTRATO</servico>
  <codigoRastreamento></codigoRastreamento>
  </volume>
  <volume>
  <servico>PAC - CONTRATO</servico>
  <codigoRastreamento></codigoRastreamento>
  </volume>
  </volumes>
  </transporte>
  <itens>
  <item>
  <codigo>001</codigo>
  <descricao>Caneta 001</descricao>
  <un>Pç</un>
  <qtde>10</qtde>
  <vlr_unit>1.68</vlr_unit>
  </item>
  <item>
  <codigo>002</codigo>
  <descricao>Caderno 002</descricao>
  <un>Un</un>
  <qtde>3</qtde>
  <vlr_unit>3.75</vlr_unit>
  </item>
  <item>
  <codigo>003</codigo>
  <descricao>Teclado 003</descricao>
  <un>Cx</un>
  <qtde>7</qtde>
  <vlr_unit>18.65</vlr_unit>
  </item>
  </itens>
  <parcelas>
  <parcela>
  <data>01/09/2009</data>
  <vlr>100</vlr>
  <obs>Teste obs 1</obs>
  </parcela>
  <parcela>
  <data>06/09/2009</data>
  <vlr>50</vlr>
  <obs></obs>
  </parcela>
  <parcela>
  <data>11/09/2009</data>
  <vlr>50</vlr>
  <obs>Teste obs 3</obs>
  </parcela>
  </parcelas>
  <vlr_frete>15</vlr_frete>
  <vlr_desconto>10</vlr_desconto>
  <obs>Testando o campo observações do pedido</obs>
  <obs_internas>Testando o campo observações internas do pedido</obs_internas>
  </pedido>
`

module.exports = {
  async createOrder() {
    return createXml()
  }
}