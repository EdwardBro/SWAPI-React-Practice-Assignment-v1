import React, { Component } from "react";
import axios from "axios";

import ReactTable from "react-table";
import "react-table/react-table.css";

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
    };
  }

  componentWillMount() {
    const url = `https://swapi.dev/api/species/`;

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.results,
        });

        if (res.data.next !== null) {
          this.getAllPages(res.data.next, res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllPages(nextpage, data) {
    axios
      .get(nextpage)
      .then((res) => {
        this.setState({
          data: data.concat(res.data.results),
        });

        if (res.data.next !== null) {
          this.getAllPages(res.data.next, this.state.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name",
        sortable: true,
      },
      {
        Header: "Classification",
        accessor: "classification",
        sortable: true,
      },
      {
        Header: "Designation",
        accessor: "designation",
        sortable: true,
      },
      {
        Header: "Average Height",
        accessor: "average_height",
        sortable: true,
      },
      {
        Header: "Skin Colors",
        accessor: "skin_colors",
        sortable: true,
      },
      {
        Header: "Hair Colors",
        accessor: "hair_colors",
        sortable: true,
      },
      {
        Header: "Eye Colors",
        accessor: "eye_colors",
        sortable: true,
      },
      {
        Header: "Average Lifespan",
        accessor: "average_lifespan",
        sortable: true,
      },
      {
        Header: "Language",
        accessor: "language",
        sortable: true,
      },
    ];

    return (
      <div>
        <ReactTable
          columns={columns}
          filterable
          data={this.state.data}
          nextpage={this.state.next}
          pagination={true}
          defaultPageSize={10}
        />
        <br />
      </div>
    );
  }
}

export default Species;
