

export const caulculateMaterialWeight = (pctg, tamanho) => {
  let peso = 0;

  switch (tamanho) {
    case 'PP':
      peso = 150;
    case 'P':
      peso = 170;
    case 'M':
      peso = 190;
    case 'G':
      peso = 210;
    case 'GG':
      peso = 230;
  }
  return pctg * peso;
};

export const calculateMaterialCarbon = (tecidoPeso, tecidoTipo) => {
  let carbonPorGrama1;

  switch (tecidoTipo) {
    case 'poliester':
      carbonPorGrama1 = 0.00952;
    case 'algodao':
      carbonPorGrama1 = 0.0059;
  }
  return carbonPorGrama1 * tecidoPeso;
};

export const calculateMaterialWater = (tecido1Peso, tecido1) => {
  if (tecido1 === 'algodao') {
    return 3.64 * tecido1Peso;
  } else if (tecido1 === 'poliester') {
    return 0.059 * tecido1Peso;
  }
};
