import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  componentDidMount(){
    this.props.update();
  }

  delete() {
    var res = window.confirm("Você realmente deseja apagar?");
    if (res == true){
      axios.delete('http://localhost:4000/produtos/'+this.props.obj.codigo)
      .then(res => {
        console.log(res.data);
        this.props.update();
      })
      .catch(err => console.log(err));
    }
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.codigo}
          </td>
          <td>
            {this.props.obj.nome}
          </td>
          <td>
            {this.props.obj.valor}
          </td>
          <td>
            <Link to={"/editar/"+this.props.obj.codigo} className="btn btn-primary">Atualizar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Apagar</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;