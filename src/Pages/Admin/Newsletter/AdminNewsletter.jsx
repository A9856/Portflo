import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import { getNewsletter, deleteNewsletter, updateNewsletter } from "../../../Redux/ActionCreators/NewsletterActionCreator"
export default function AdminNewsletter() {
    let dispatch = useDispatch()
    let NewsletterStateData = useSelector(state => state.NewsletterStateData)

    function deleteRecord(id) {
        if (window.confirm("Are you sure to Delete that Item : ")) {
            dispatch(deleteNewsletter({ id: id }))
            getAPIData()
        }
    }

    function updateRecord(id) {
        if (window.confirm("Are you sure to update status : ")) {
            let item=NewsletterStateData.find(x=>x.id===id)
            dispatch(updateNewsletter({...item,active:!item.active}))
            getAPIData()
        }
    }

    function getAPIData() {
        dispatch(getNewsletter())
        // console.log("🧾 State data length:", NewsletterStateData.length);
        if (NewsletterStateData.length) {
            var time = setTimeout(() => {
                $('#myTable').DataTable()
            },300)
            return time
        }
    }
    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [NewsletterStateData.length])
    return (
        <>
            <Breadcumb title="Admin" />
            <div className='container-fluid my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary w-100 p-2 text-center text-light'>Newsletter</h5>
                        <div className="table-responsive">
                            <table id="myTable" className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Active</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        NewsletterStateData.map(item => {
                                            return <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td onClick={()=>updateRecord(item.id)}style={{cursor:"pointer"}}>{item.active ? "Yes" : "No"}</td>
                                                <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                                            </tr>

                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
