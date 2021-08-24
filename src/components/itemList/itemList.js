import React, {Component} from 'react';
import Spinner from '../spinner';
import gotService from '../../services/gotService';
import './itemList.css';


class ItemList extends Component {

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = this.props.renderItem(item);

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }


    render() {

        const {data} = this.props;

        const items = this.renderItems(data);

        console.log(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null
        }

        componentDidMount() {
            const {getData} = this.props;
        
            getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const {data} = this.state;
    
            if(!data) {
                return <Spinner/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

const {getAllCharacter} = new gotService();
export default withData(ItemList, getAllCharacter);