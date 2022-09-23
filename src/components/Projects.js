import { Link } from "react-router-dom";
function Projects() {
    const Projects =[
        {id: 10, 
            name: "Datatys", 
            description: "Platform for managing, processing and visualizing sensor and IoT data.",
            photo: "img/projects/datatys.png"},
        {id: 1, 
        name: "3aweni Social Network", 
        description: "3aweni is a professional social network that aims to help people look for job offers.", 
        photo: "img/projects/3aweni3.png"
        },
        // {id: 2, 
        // name: "BricoFast (ux design)", 
        // description: "Learn the basics of web product development through the design thinking process.",
        //  photo: "img/projects/brico.png"}
        //  ,
         {id: 9, 
            name: "Devops Project", 
            description: "Implement all the links in the delivery chain of a Spring Boot application.",
            photo: "img/projects/timesheet.png"},
        {id: 11, 
            name: "Microservices Project", 
            description: "The purpose of this project is to become familiar with the Microservices architecture and its various elements.",
            photo: "img/projects/microservice.png"},
         {id: 8, 
            name: "Preclinic", 
            description: "A platform that makes it easier for Proxym employees to request appointments online with doctors",
            photo: "img/projects/preclinic.png"},
            {id: 6, 
                name: "VideDressing", 
                description: "Online wardrobe sale where people can buy, sell or trade new or used fashion items.",
                photo: "img/projects/videdressing.png"},
                {id: 7, 
                    name: "HVAC", 
                    description: "HVAC is a web application that offers to help users sell or buy a car.",
                    photo: "img/projects/hvac.png"},
        { id: 3, 
          name: "Tunisian Got Talent", 
          description: "Is a Multiplatform application: (web, desktop and mobile), dedicated for the talented.",
          photo: "img/projects/tunisian.png"},
          {id: 5, 
            name: "Design cuisine", 
            description: "A web application that was created in collaboration with a furniture sales company.",
            photo: "img/projects/designcuisine.png"},
        { id: 4, 
          name: "Smarket", 
          description: "Smarket allows the user to manage a supermarket in an easier way.",
          photo: "img/projects/smarket.png"
        }




    ];
    return (
        <div className="art-content">

          {/* <!-- curtain --> */}
          <div className="art-curtain"></div>

          {/* <!-- top background --> */}
          <div className="art-top-bg" style={{backgroundImage: "url(img/bg.jpg)"}}>
            {/* <!-- overlay --> */}
            <div className="art-top-bg-overlay"></div>
            {/* <!-- overlay end --> */}
          </div>
          {/* <!-- top background end --> */}


          {/* <!-- swup container --> */}
          <div className="transition-fade" id="swup">

            {/* <!-- scroll frame --> */}
            <div id="scrollbar" className="art-scroll-frame">

              {/* <!-- container --> */}
              <div className="container-fluid">

                {/* <!-- row --> */}
                <div className="row p-30-0">

                  {/* <!-- col --> */}
                  <div className="col-lg-12">

                    {/* <!-- section title --> */}
                    <div className="art-section-title">
                      {/* <!-- title frame --> */}
                      <div className="art-title-frame">
                        {/* <!-- title --> */}
                        <h4>Projects</h4>
                      </div>
                      {/* <!-- title frame end --> */}
                    </div>
                    {/* <!-- section title end --> */}

                  </div>
                  {/* <!-- col end --> */}
                  {Projects.map( project =>
                  <div className="col-lg-4" key={project.id}>

                  {/* <!-- blog post card --> */}
                  <div className="art-a art-blog-card">
                    {/* <!-- post cover --> */}
                    <Link refresh="true" to={`/detailproject/${project.id}`} className="art-port-cover">
                      {/* <!-- img --> */}
                      <img src={project.photo} alt="blog post"/>
                    </Link>
                    {/* <!-- post cover end --> */}
                    {/* <!-- post description --> */}
                    <div className="art-post-description">
                      {/* <!-- title --> */}
                      <Link to={`/detailproject/${project.id}`}>
                        <h5 className="mb-15">{project.name}</h5>
                      </Link>
                      {/* <!-- text --> */}
                      <div className="mb-15">{project.description}</div>
                      {/* <!-- link --> */}
                      <Link to={`/detailproject/${project.id}`} className="art-link art-color-link art-w-chevron">Read more</Link>
                    </div>
                    {/* <!-- post description end --> */}
                  </div>
                  {/* <!-- blog post card end --> */}

                </div>
                  )}
                  {/* <!-- col --> */}

                  {/* <!-- col end --> */}




                </div>
                {/* <!-- row end --> */}

              </div>
              {/* <!-- container end --> */}

              {/* <!-- container --> */}
              <div className="container-fluid">

                {/* <!-- row --> */}
                <div className="row">

                  {/* <!-- col --> */}
                  <div className="col-lg-12">

                    {/* <!-- pagination --> */}
                    <div className="art-a art-pagination">
                      {/* <!-- button --> */}
                      {/* <a href="/blog-2-col.html" className="art-link art-color-link art-w-chevron art-left-link"><span>Previous page</span></a>
                      <div className="art-pagination-center art-m-hidden">
                        <a href="/blog-2-col.html">e</a>
                        <a href="/blog-2-col.html">1</a>
                        <a className="art-active-pag" href="/blog-2-col.html">2</a>
                        <a href="/blog-2-col.html">3</a>
                        <a href="/blog-2-col.html">...</a>
                      </div> */}
                      {/* <!-- button --> */}
                      {/* <a href="/blog-2-col.html" className="art-link art-color-link art-w-chevron"><span>Next page</span></a> */}
                    </div>
                    {/* <!-- pagination end --> */}

                  </div>
                  {/* <!-- col end --> */}

                </div>
                {/* <!-- row end --> */}

              </div>
              {/* <!-- container end --> */}

              {/* <!-- container --> */}
              <div className="container-fluid">

                {/* <!-- row --> */}

                {/* <!-- row end --> */}

              </div>
              {/* <!-- container end --> */}

              {/* <!-- container --> */}
              {/* <!-- container end --> */}


            </div>
            {/* <!-- scroll frame end --> */}

          </div>
          {/* <!-- swup container end --> */}

        </div>
);
}
export default Projects;



