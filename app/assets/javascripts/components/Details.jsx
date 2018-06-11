class Details extends React.Component {
    constructor(props) {
      super(props);
        
      this.state = {
         data:[
            {
               name: 'First...',
               id: 1
            },
            {
               name: 'Second...',
               id: 2
            },
            {
               name: 'Third...',
               id: 3
            }
         ]
      }
   }
    render() {
        return (
            <div>
                <h4>Description</h4>
            </div>
        );
    }
}

