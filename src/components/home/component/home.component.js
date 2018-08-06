import React, { Component } from 'react';
const img = './images/f.png';

class LikeComponent extends Component {
    render() {
        const style = {
            display: 'block',
            margin: '0 auto'
        }
        return (
            <div className="App">
                <br/>
                <div className="ui container one column centered grid">
                  <h2>Like's React && Redux</h2>
                  <div className="ui row">
                     <div className="ui link cards">
                         <div className='card' style={style}>
                             <div className="image">
                                 <img src={img} alt={'user'}/>
                             </div>
                             <div className="content">
                                 <div className="header">Matt Giampietro</div>
                                 <div className="meta">
                                     <a>Friends</a>
                                 </div>
                                 <div className="description">
                                     Matthew is an interior designer living in New York.
                                 </div>
                             </div>
                             <div className="extra content">
                      <span className="right floated">
                        Joined in 2018
                      </span>
                                 <span>
                      <i className="user icon"></i>
                        {this.props.counter} Like's
                      </span>
                             </div>
                         </div>
                     </div>
                     <br/>
                 </div>

                <button className="ui  red button" onClick={this.props.addLike}>
                    <i className="heart icon"></i> Like
                </button>

                <button className="ui basic blue button" onClick={this.props.removeLike}>
                    <i className="thumbs down icon"></i> Sad
                </button>

              </div>
            </div>
        );
    }
}

export default LikeComponent;
