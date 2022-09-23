import { useEffect, useState } from 'react';
import Projects from '../projects/Projects';





const DetailProject=({match})=>{
  const [value,setValue] = useState(true);
  useEffect(() => {
  if(value === true) {
    // window.location.reload();
    setValue(false);
  }
  }, [value]);
  const projectid = match.params.projectid;
  // const idproject = id;
  const project = Projects.find(({id})=> id === parseInt(projectid));

    return (
      <div className="art-content">

        {/* <!-- curtain --> */}
        <div className="art-curtain"></div>

        {/* <!-- top background --> */}
        <div className="art-top-bg" style={{backgroundImage: "url(img/bg.jpg)"}}>
          {/* <!-- overlay --> */}
          <div className="art-top-bg-overlay"></div>
          {/* <!-- overlay end -->*/}
        </div>
        {/* <!-- top background end -->*/}

       {/* <!-- swup container -->*/}
        <div className="transition-fade" id="swup">

        {/*  <!-- scroll frame -->*/}
          <div id="scrollbar" className="art-scroll-frame">

           {/*  <!-- container -->*/}
            <div className="container-fluid">

             {/*  <!-- row -->*/}
              <div className="row p-30-0">

                {/* <!-- col -->*/}
                <div className="col-lg-12">

              {/*     <!-- section title -->*/}
                  <div className="art-section-title">
               {/*      <!-- title frame -->*/}
                    <div className="art-title-frame">
                    {/*    <!-- title -->*/}
                      <h4>{project?.name}</h4>
                    </div>
                    {/*   <!-- title frame end -->*/}
                  {/*   <!-- right frame -->*/}
                   {/*   <!-- right frame end -->*/}
                  </div>
                {/*     <!-- section title end -->*/}

                </div>
               {/*  <!-- col end -->*/}

                {/* <!-- col -->*/}
                <div className="col-lg-12">

                {/*    <!-- slider container -->*/}
                  <div className="swiper-container art-works-slider" style={{overflow: "visible"}}>
                  {/*     <!-- slider wrapper -->*/}
                    <div className="swiper-wrapper">
                  {/*      <!-- slide -->*/}
                  {project?.album.map( (album, index) =>
                      <div key={index} className="swiper-slide">
                       {/*   <!-- item frame -->*/}
                        <a data-fancybox="gallery" href={album.photo} className="art-a art-portfolio-item-frame art-horizontal">
                        {/*    <!-- img -->*/}
                          <img src={album.photo} alt="item"/>
                        {/*    <!-- zoom icon -->*/}
                          <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                        </a>
                       {/*  <!-- item end -->*/}
                      </div>

                    )}
                    </div>
                  {/*     <!-- slider wrapper end -->
*/}
                  </div>
                 {/*   <!-- slider container end -->*/}

                </div>
               {/*  <!-- col end -->*/}

                {/* <!-- col -->*/}
                <div className="col-lg-12">

                {/*     <!-- slider navigation -->
*/}
                  <div className="art-slider-navigation">

                   {/* <!-- left side -->*/}
                    <div className="art-sn-left">

                      {/*<!-- slider pagination -->*/}
                      <div className="swiper-pagination"></div>

                    </div>
                   {/*   <!-- left side end -->*/}

                    {/*  <!-- right side -->*/}
                    <div className="art-sn-right">

                    {/*     <!-- slider navigation -->*/}
                      <div className="art-slider-nav-frame">
                       {/*  <!-- prev -->*/}
                        <div className="art-slider-nav art-works-swiper-prev"><i className="fas fa-chevron-left"></i></div>
                       {/*  <!-- next -->*/}
                        <div className="art-slider-nav art-works-swiper-next"><i className="fas fa-chevron-right"></i></div>
                      </div>
                    {/*     <!-- slider navigation -->
*/}

                    </div>
                 {/*   <!-- right side end -->*/}

                  </div>
               {/*    <!-- slider navigation end -->*/}

                </div>
               {/*  <!-- col end -->*/}

              </div>
            {/*    <!-- row end -->*/}

            </div>
          {/*   <!-- container end -->*/}

           {/*  <!-- container -->*/}
            <div className="container-fluid">

             {/*  <!-- row -->*/}
              <div className="row p-30-0">

                {/* <!-- col -->*/}
                <div className="col-lg-12">

              {/*     <!-- section title -->*/}
                  <div className="art-section-title">
               {/*      <!-- title frame -->*/}
                    <div className="art-title-frame">
                    {/*    <!-- title -->*/}
                      <h4>Project details</h4>
                    </div>
                    {/*   <!-- title frame end -->*/}
                  </div>
                {/*     <!-- section title end -->*/}

                </div>
               {/*  <!-- col end -->*/}

                {/* <!-- col -->*/}
                <div className="col-lg-8">

                  <div className="art-a art-card art-fluid-card">
                    <h5 className="mb-15">Description</h5>
                    {project.name === 'Devops Project' ? <ul>
                        {project?.description2.map( (des) =>
                        <li>{des}</li>
                        )}
                      </ul> : project.name === 'Microservices Project' ? <ul>
                        {project?.description2.map( (des) =>
                        <li>{des}</li>
                        )}
                      </ul>: <div className="mb-15">{project?.description2}</div>}

                      {project.name === 'Devops Project' ? <></> : project.name === 'Microservices Project' ? <></>: 
                      <>
                        <h5 className="mb-15">Functional requirements</h5>
                      <ul>
                        {project?.Functional?.map( (func) =>
                        <li>{func}</li>
                        )}
                      </ul>
                      </>

                      
                      }

<h5 className="mb-15">Tags</h5>
<p> {project?.Tags }</p>

                 {/*    <!-- button -->*/}
                 {project?.urlbool &&
                  <div className="art-buttons-frame"><a href={project?.accesweb} className="art-link art-color-link art-w-chevron" target="_blank" rel="noreferrer">{project?.url}</a></div>
      }
                    
                  </div>

                </div>
               {/*  <!-- col end -->*/}

                {/* <!-- col -->*/}
                <div className="col-lg-4">

                  <div className="art-a art-card">
                  {/*     <!-- table -->*/}
                    <div className="art-table p-15-15">
                      <ul>
                        <li>
                          <h6>Start Date:</h6><span>{project.start}</span>
                        </li>
                        <li>
                          <h6>Final Date:</h6><span>{project.end}</span>
                        </li>
                        {/* <li>
                          <h6>Status:</h6><span>Completed</span>
                        </li> */}
                        <li>
                          <h6>Company:</h6><span>{project?.company}</span>
                        </li>
                      </ul>
                    </div>
                   {/*   <!-- table end -->*/}
                  </div>

                </div>
               {/*  <!-- col end -->*/}

              </div>
            {/*    <!-- row end -->*/}


            </div>
          {/*   <!-- container end -->*/}







          </div>
          {/* <!-- scroll frame end --> */}

        </div>
        {/* <!-- swup container end --> */}

      </div>
);
}
export default DetailProject;