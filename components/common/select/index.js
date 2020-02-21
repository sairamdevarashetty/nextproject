import React from 'react';

const SearchIcon = () => (
  <div class="icon">
    <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height: 18px; width: 18px; display: block; fill: currentcolor;"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
  </div>
)

class Select extends React.Component {
    constructor(){
      super();
      this.styleObject = {
        position: 'absolute',
        maxHeight: '300px',
        zIndex: 9999,
        display: 'none'
      }
    }

    state = {
      suggestionsList: [{}],
      selectedValue: '',
      enableSuggestions:false
    }    

    buildOptions = () => {
      return (
        <React.Fragment>
          <div className="autocomplete-suggestion" data-index={0}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Peschiera </font></font><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>d</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> el gar </font></font><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>d</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> a</font></font>
          </div>
          <div className="autocomplete-suggestion" data-index={1}><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>D</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> esenzano</font></font>
          </div>
          <div className="autocomplete-suggestion" data-index={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Riva </font></font><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>d</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> el Gar </font></font><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>d</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> a</font></font>
          </div>
          <div className="autocomplete-suggestion" data-index={3}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Gar </font></font><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>d</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> a</font></font>
          </div>
          <div className="autocomplete-suggestion" data-index={4}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bar </font></font><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>d</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> olino</font></font>
          </div>
        </React.Fragment>
      )
    }

    _handleSearch = (e) => {
      if (e.currentTarget.value) {
        if (this.styleObject.display) {
          delete this.styleObject.display;
        }
        this.setState({ enableSuggestions : true });
      } else {
        this.styleObject.display = "none";
        this.setState({enableSuggestions : false });
      }
    }
   
    render () {
      console.log("this.styleObject", this.styleObject);
      return (
        <React.Fragment>
          <div className="site-search">
            <div className="row itemsOfSearch">
              <div className="col-12">
                <div className="search-div">
                  <searchicon>
                    <input placeholder="Choose a destination" type="text" name="paese1" id="autocomplete" autoComplete="off" onChange={this._handleSearch.bind(this) } />
                    <div className="suggestions-1 suggest">
                      <div
                        className="autocomplete-suggestions"
                        style={this.styleObject}
                      >
                        { this.buildOptions() }
                      </div>
                    </div>
                  </searchicon>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default Select;

