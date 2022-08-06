const listaClientes = () => {
  return fetch(`http://localhost:3000/profle`)
    .then(resposta => {
      if (resposta.ok)
        return resposta.json();
      throw new Error("Erro ao listar clientes");
    });
}

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  }).then(resposta => {
    if (resposta.ok)
      return resposta.body;
    else
      throw new Error("Erro ao criar cliente");
  });
}

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE"
  }).then(resposta => {
    if (!resposta.ok)
      throw new Error("Erro ao deletar cliente");
  });
}

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
      if (resposta.ok)
        return resposta.json();
      else
        throw new Error("Erro ao detalhar clientes");
    });
}

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    })
  })
    .then(resposta => {
      if (resposta.ok)
        return resposta.json();
      else
        throw new Error("Erro ao atualizar clientes");
    });
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}
