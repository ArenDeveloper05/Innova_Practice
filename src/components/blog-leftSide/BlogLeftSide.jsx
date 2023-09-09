import { useSelector } from 'react-redux';
import './BlogLeftSide.scss'
const BlogLeftSide = () => {
  const LeftSide = useSelector((state) => {
    return state.leftSide.leftSide;
  });
  const leftSideTwo = useSelector((state) =>{
    return state.leftSide.leftSideTwo;
  })
  return (
    <section className='blogLeft-main'>
        <form className='blogLeft-main-form'>
          <div className='blogLeft-main-form-inputs'>
        <input type='text' placeholder='Search...' className='blogLeft-main-form-input'/>
        </div>
        <div class="categories">
						<h2 class="categorie-head">Categories</h2>
						<ul>
							<li><a href="/">Decorate</a></li>
							<li><a href="/">Even</a></li>
							<li><a href="/">Gallery</a></li>
							<li><a href="/">Recipe</a></li>
							<li><a href="/">Restaurant Food</a></li>
						</ul>
            <h3 className='categorie-head'>RECENT POST</h3>
            {leftSideTwo.map(({ id,image, date, message }) => (
                <div id={id} className='blogLeft-main-div-dataTwo'>
                  <div className='blogLeft-main-div-dataTwo-hidden'>
                  <img alt={message} src={image}/>
                  </div>
                  <nav>
                    <p>{date}</p>
                    <h2>{message}</h2>
                  </nav>
                </div>
            ))}
            <div className='blogLeft-main-div-tags'>
              <h1>TAGS</h1>
              <ul>
							<li><a href="/">Cooking</a></li>
							<li><a href="/">Food</a></li>
							<li><a href="/">Pellentesfetque</a></li>
							<li><a href="/">Restaurant Food</a></li>
							<li><a href="/">Nulla pellentesque</a></li>
							<li><a href="/">Cooking</a></li>
						</ul>
            </div>
					</div>
        </form>
    <div className='blogLeft-main-div'>
     {LeftSide.map(({ id, title, comment, image, orderBy, message }) => (
                <div id={id} className='blogLeft-main-div-data'>
                  <img alt={title} src={image} className='blogLeft-main-div-data-images'/>
                  <div>
                  <nav>
                    <p className='blogLeft-main-div-data-mesOrder'>By {orderBy}   {comment} comments</p>
                    <p className='blogLeft-main-div-data-title'>{title}</p>
                    <p className='blogLeft-main-div-data-mes'>{message}</p>
                    <a className='blogLeft-main-div-data-a' href='/readMore'>READ MORE</a>
                  </nav>
                  </div>
                </div>
            ))}
            <div class="blogLeft-main-div-pagination">
						<ul>
							<li style={{backgroundColor: 'black'}} class="active"><a href="/" style={{}}>1</a></li>
							<li><a href="/">2</a></li>
							<li><a href="/">3</a></li>
							<li><a href="/">Next<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
						</ul>
					</div>
    </div>
    </section>
  )
}

export default BlogLeftSide