
function FormComponent() {
    return (
        <>
            <div class="form-container">

                <h1>All this form to add movie</h1>
                <form >
                    <label>First Name</label>
                    <br />
                    <input type="text" placeholder="Movie name"></input>
                    <br />

                    <label >Year of relese date</label>
                    <br />
                    <input type="text" placeholder="Year of relese"></input>

                    <br />
                    <label for="subject">Subject</label>
                    <br />
                    <textarea className="textarea" placeholder="Write something.."></textarea>
                    <br />
                </form>
                <br />
                <div className="uplodebutton" >Uplode</div>
                <br />
                <div className="addmoviebutton">Add new movie</div>
            </div>

        </>

    );
}

export default FormComponent;
