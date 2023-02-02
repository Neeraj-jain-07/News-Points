// from NewsComponet.js


//  <div id='paidSectoinAlert' className={`alert alert-primary ${Math.floor(100/this.props.pageSize) < this.state.page +1? 'd-block':'d-none'}`} role="alert">
//                     For More News Please Go to Paid Account
//                 </div>
//                 <div className="container d-flex justify-content-center my-4">
//                     <div className="form d-flex">
//                         <input className='px-2' type="number" name="pageNumberQuery" id="pageNumberQuery" />
//                         <button className='btn btn-sm btn-info ms-1 text-white f-bold ' onClick={this.searchPage}>Load Page</button>
//                     </div>
//                 </div>
//                 <div className="container d-flex justify-content-between my-4" style={{"height": "32px"}}>
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-info" onClick={this.hanblePrevClick}>&#8249; Previous</button>

//                     <button disabled={true} type="button" className="btn btn-sm btn-primary">
//                         <span className="badge text-bg-secondary">Page : {this.state.page}</span>
//                         <span className="badge text-bg-secondary m-1">{Math.ceil(this.state.totalResults / this.props.pageSize)}</span>
//                     </button>

//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize) || Math.floor(100/this.props.pageSize) < this.state.page +1} type="button" id='btnNext' className="btn btn-sm btn-info" onClick={this.hanbleNextClick}>Next &#8250;</button>
//                 </div> 



//  neerajrajjain21@gmail.com     => b9e94d9186c443368b45e6b5d0be4e9f
    //  neerajrajjain12@gmail.com     => aad1b842a4194fa28011873a2483c55c
    //  jneha3743@gmail.com           => 9524ed7330d54261be91cca525908830
    //    temp email                  => 84eec0f43184461a912413f992cbd5bb
    //    temp email                  => e00424d1253e49658a6f365eea1ff732
                                                                        //   --- remian today
    //    temp email                  => 1470705f1cbb4da88a0d6cdb12f83408    
    //    temp email                  => 3f12ae4bc4584589b8523109091fcba5
    // api = 'e00424d1253e49658a6f365eea1ff732'




 // hanbleNextClick = async () => {
    //     this.updateNews(this.state.page + 1)
    // }
    // hanblePrevClick = async () => {
    //         this.updateNews( this.state.page - 1 )
    // }



    // searchPage = async (e) => {
    //     let value = Number(document.getElementById('pageNumberQuery').value);
    //     document.getElementById('pageNumberQuery').value ='';
    //     if (!value || value > Math.floor(100/this.props.pageSize)  || value > Math.ceil(this.state.totalResults/this.props.pageSize)) {
    //         alert('page search input value can not be null or greater than 5 please search again')
    //         console.log('page search input value can not be null or greater than 5 please search again')
    //     } else {
    //         this.updateNews(value)
    //     }
    //  }  

    // !this.state.loading &&