import React, { Component } from 'react';


class RecordsList extends Component{

render(){
    return(

        <tr>
            <td>
                {this.props.obj.id}
            </td>
            <td>
                {this.props.obj.username}
            </td>
              <td>
                {this.props.obj.password}
            </td>
        </tr>




    );
}

}
export default RecordsList;