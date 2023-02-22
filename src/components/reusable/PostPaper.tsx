import React from "react";

const PostPaper = () => {
  const fakePost =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sapiente consequatur, non saepe amet a nulla, veritatis, ad esse ipsum debitis cumque natus accusamus illo eos. Quo ab impedit dolor. Vitae, recusandae aut? Corrupti quidem nulla et praesentium eveniet facilis neque, totam quia repellat qui earum eius? Est explicabo hic eum fugit officia, autem praesentium? Inventore optio quidem magnam labore corrupti enim unde molestiae, dolor quibusdam non blanditiis quasi consequatur quaerat nemo voluptatum nihil error! Facilis, itaque sunt. Nesciunt quasi explicabo dolorum nulla commodi, eum neque possimus facere maiores sint, in tempora animi voluptate labore delectus, sit necessitatibus porro non perspiciatis illum! In tenetur voluptas sapiente odio, iste ut rerum aut enim expedita aperiam. Quis ea omnis inventore rerum a? Recusandae culpa quod ut. Quidem eos veniam numquam minus eius nulla cumque inventore libero rerum delectus modi voluptate minima quam unde, ea harum nemo. Vero iste velit temporibus fugiat! Aliquam aperiam sed impedit consequatur et aut quas incidunt eos quaerat quis! Dolore accusantium ex rerum repellat earum. Numquam laboriosam dolore facere dolores iure. Recusandae reiciendis sint vitae aliquam officiis eaque quam! Deleniti nesciunt minima ad itaque omnis quod recusandae consequuntur aperiam, voluptatum tempora iste laborum illo aut dolorum eveniet deserunt, eligendi velit laboriosam. Hic dolores repudiandae ducimus libero commodi qui, illum, ipsa sunt veritatis suscipit cupiditate, corrupti ipsam eaque dolorem modi rem blanditiis laudantium! Voluptate rerum magnam hic explicabo sequi vitae quidem voluptas facilis eos, similique ad, veritatis velit debitis reiciendis nihil autem quia adipisci numquam, obcaecati cum dolorem culpa? Architecto voluptatem illo fugit. Rerum voluptas dolorum quas velit, minus hic, dolorem inventore in animi, itaque nobis. Corporis aliquid laudantium a expedita voluptates nesciunt ab commodi, assumenda aspernatur minus. Exercitationem eligendi possimus vero eius, neque aut suscipit cupiditate odio veniam deserunt fugit minima laboriosam, veritatis hic? Officia similique id quibusdam eius asperiores, a corrupti perferendis, assumenda aspernatur ea necessitatibus vitae est fugit fugiat, maiores dolor perspiciatis autem dolore et praesentium repellat? Unde amet quidem harum. Maiores molestias earum vitae exercitationem explicabo dolor qui tenetur cum culpa distinctio corrupti natus, aliquam, rem, eligendi sed sapiente porro provident debitis aut? At animi quam veniam incidunt eveniet. Inventore doloribus ut rerum sed exercitationem. Voluptates officiis maxime voluptatum neque aperiam sit, rerum nihil beatae unde doloribus facere voluptas quos. Natus corrupti perspiciatis nihil! Recusandae laborum sed velit dolorum perferendis consequatur explicabo, dolore quasi nostrum numquam asperiores exercitationem accusamus corrupti. Nihil minus ad eligendi maiores fugiat iure dignissimos totam eos. Quos, nemo error aliquid ullam voluptatum facere provident deserunt sapiente numquam quia dolorum aspernatur, modi soluta libero reiciendis id cupiditate saepe ipsa animi, explicabo eveniet cum eligendi officia excepturi? Consequatur deserunt delectus assumenda non pariatur ullam deleniti? Suscipit, repudiandae? Illo quasi fuga harum iure veniam molestias, atque provident! Assumenda natus, ad similique perspiciatis consectetur veritatis ipsam neque voluptas mollitia unde facilis, optio numquam expedita eaque accusantium autem distinctio doloremque. Nihil rerum dolorum eius ut sunt magnam facilis saepe fugit et, dolorem porro rem, fugiat dolores placeat possimus harum incidunt. Explicabo cum ad odio labore excepturi?";

  return (
    <div className="w-full h-auto py-10px bg-white mt-10 shadow-lg">
      <div className="h-[100px] flex items-center justify-between w-11/12 mx-auto">
        <div className="w-2/4 h-full flex items-center">
          <img
            className="w-3/12 h-[80px] rounded-full"
            src="https://i.ibb.co/6YK1cXs/avatar.jpg"
            alt="profile pic"
          />

          <p className="text-2xl ml-5">Faridul Haque</p>
        </div>
        <div>Edit</div>
      </div>
      <div className="w-11/12 mx-auto mt-5 pb-10">
        <p className="w-full text-lg text-justify">
          {fakePost.length >= 300 ? `${fakePost.slice(0, 300)}` :  fakePost }
          {
            fakePost.length >= 300 && <span>... <span className="link link-hover text-blue-500">See More</span></span>
          }
        </p>
      </div>
    </div>
  );
};

export default PostPaper;
