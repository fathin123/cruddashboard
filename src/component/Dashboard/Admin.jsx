import React from "react";

const Post = (props) => {
    return (
        <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">No. HP</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{props.nama}</td>
                                        <td>{props.alamat}</td>
                                        <td>{props.telp}</td>
                                        <td>
                                            <button type="submit" className="btn btn-danger" id="hapus" onClick={this}>Hapus</button>
                                            <button type="submit" className="btn btn-primary" id="simpan" onClick={this}>Simpan</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
    )
}

export default Post;