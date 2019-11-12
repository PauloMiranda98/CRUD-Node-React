import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {produtos: []};
      this.update = this.update.bind(this);
    }

    update(){
      axios.get('http://localhost:4000/produtos')
        .then(response => {
          this.setState({ produtos: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    componentDidMount(){
      this.update();
    }

    tabRow(){
      var upd = this.update;
      return this.state.produtos.map(function(object, i){
          return <TableRow update={upd} obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Lista de Produtos</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Valor</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }