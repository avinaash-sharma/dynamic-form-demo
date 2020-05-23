import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultColDef: {
        flex: 1,
        editable: true,
        resizable: true,
        minWidth: 200,
      },
      columnDefs: [
        { headerName: "name", pinned: "left", field: "name", editable: false },
        { headerName: "description", field: "description" },
        { headerName: "type", field: "type" },
        { headerName: "Model", field: "model" },
        { headerName: "rarity", field: "rarity" },
        { headerName: "series", field: "series" },
        { headerName: "costmeticId", field: "costmeticId" },
       
      ],
      dataStore:[],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mustang", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mustang", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mustang", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mustang", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mustang", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mustang", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
      ],
    };
  }

  async componentDidMount() {
    await fetch("https://fortnite-api.theapinetwork.com/store/get")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          dataStore: data.data,
        })
      );
  }
  onCellValueChanged() {
    console.log("Hello From OnCellValueChanged");
    // console.log(this.state.rowData);
  }
  onGridReady = (params) => {
    console.log(params);
  };
  render() {
    let newData = [];
    // console.log(this.state.dataStore);
    let dataToGet=[];
    dataToGet = this.state.dataStore;
    console.log(dataToGet);
    
    
    newData = Object.keys(dataToGet).map(element => {
        return {
            name: 
            dataToGet[element].item.name,
            description: 
            dataToGet[element].item.description,
            type: 
            dataToGet[element].item.type,
            model: 
            dataToGet[element].item.model,
            rarity: 
            dataToGet[element].item.rarity,
            series: 
            dataToGet[element].item.series,
            costmeticId: 
            dataToGet[element].item.costmeticId,
            
        };
        
    })
    console.log(newData);
    return (
      <Container>
        <div className="DataGrid">
          <div className="ag-theme-alpine">
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={newData}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady}
            ></AgGridReact>
            <Button
              variant="contained"
              onClick={() => {
                console.log(this.state.rowData);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
