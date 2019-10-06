import React, { Component } from "react";
import axios from "axios";

import ReactTable from "react-table";
import "react-table/react-table.css";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: []
    };
  }

  componentWillMount() {
    const url = `https://swapi.co/api/people/`;

    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data.results
        });

        if (res.data.next !== null) {
          this.getAllPages(res.data.next, res.data.results);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  getAllPages(nextpage, data) {
    axios
      .get(nextpage)
      .then(res => {
        this.setState({
          data: data.concat(res.data.results)
        });

        if (res.data.next !== null) {
          this.getAllPages(res.data.next, this.state.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name",
        sortable: true
      },
      {
        Header: "Height",
        accessor: "height",
        sortable: true
      },
      {
        Header: "Mass",
        accessor: "mass",
        sortable: true
      },
      {
        Header: "Hair Color",
        accessor: "hair_color",
        sortable: true
      },
      {
        Header: "Skin Color",
        accessor: "skin_color",
        sortable: true
      },
      {
        Header: "Birth Year",
        accessor: "birth_year",
        sortable: true
      },
      {
        Header: "Gender",
        accessor: "gender",
        sortable: true
      }
    ];

    return (
      <div>
        <ReactTable
          columns={columns}
          filterable
          nextpage={this.state.next}
          data={this.state.data}
          pagination={true}
          defaultPageSize={10}
        />
        <br />
      </div>
    );
  }
}

export default People;
