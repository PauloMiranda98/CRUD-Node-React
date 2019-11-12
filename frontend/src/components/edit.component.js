import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeCodigo = this.onChangeCodigo.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeValor = this.onChangeValor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      codigo: '',
      nome: '',
      valor: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/produtos/'+this.props.match.params.codigo)
      .then(response => {
        console.log(response.data);
        this.setState({ 
          codigo: response.data.codigo,
          nome: response.data.nome, 
          valor: response.data.valor
        });
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  onChangeCodigo(e) {
    this.setState({
      codigo: e.target.value
    });
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeValor(e) {
    this.setState({
      valor: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      codigo: this.state.codigo,
      nome: this.state.nome,
      valor: this.state.valor
    };
    axios.put('http://localhost:4000/produtos/'+this.props.match.params.codigo, obj)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/listar');
      });    
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Atualizar Produtos</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Código:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.codigo}
                      onChange={this.onChangeCodigo}
                      />
                </div>
                <div className="form-group">
                    <label>Nome:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeNome}
                      />
                </div>
                <div className="form-group">
                    <label>Valor: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.valor}
                      onChange={this.onChangeValor}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Atualizar" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}