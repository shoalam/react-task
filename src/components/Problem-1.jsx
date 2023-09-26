import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [formData, setFormData] = useState({ name: '', status: '' });
    const [data, setData] = useState([]);

    const handleClick = (status) =>{
        setShow(status);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setData([...data, formData]);
        setFormData({ name: '', status: '' });
    }


    const filteredData = show === 'all' ? data : data.filter(item => item.status === show);


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1 Set</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name="status" value={formData.status.toLowerCase()} onChange={handleInputChange} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                           
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul> 
                     <div className="tab-content">
                     <table className="table table-striped ">
                     <thead>
                     <tr>
                         <th scope="col">Name</th>
                         <th scope="col">Status</th>
                     </tr>
                     </thead>
                     <tbody>
                     {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.status.toLowerCase()}</td>
                        </tr>
                    ))}
                     </tbody>
                 </table>
                 </div>

                </div>
            </div>
        </div>
    );
};

export default Problem1;