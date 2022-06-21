h2{
    color: rgb(255, 255, 255);
    background-color: rgb(71, 211, 183);
    width: 200px;
    height: 30px;
    padding: 10px;
    text-align: center;
    margin-left: 700px;
}

.grid-container{
    display: grid;
    /* grid-template-rows: 200px 200px 300px; */
    /* grid-template-columns: 300px 300px 300px; */
    /* You can also use fraction to divide the space as desired */

    /* Also the values can be mixed bte pixels and fraxtions */
    /* grid-template-columns: 2fr 1fr 1fr; */
    grid-template-columns:400px 1fr 1fr;

    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-template-rows: 2fr 1fr 1fr; */
    border: 2px solid blue;
    height: 400px;
    column-gap: 20px;
    padding: 20px;
    background-color: rgb(243, 151, 190);
}


.grid-container2{
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr) 200px;
    /* grid-template-columns: mimax (200px 200px); */

    /* grid-templates can also be set to (auto) to accommodate the object within  */
    border: 2px solid Red;
    height: 300px;
    column-gap: 20px;
    /* row-gap: 20px; */
    background-color: rgb(79, 109, 231);
    padding: 20px;
   
}


.grid-container > div{
    border: 2px solid blue;
}
.grid-container2 > div{
    border: 2px solid red;
}


/* This allows the image to fit into the div */
img{
    width: 100%;
  height: 100%;
}