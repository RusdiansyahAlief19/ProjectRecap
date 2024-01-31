// OneTimeLink.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const OneTimeLink = () => {
  const [token, setToken] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Membuat token unik menggunakan library uuid
    const newToken = uuidv4();
    setToken(newToken);

    // Simpan token di tempat penyimpanan yang sesuai, seperti database atau localStorage

    // Contoh menyimpan di localStorage
    localStorage.setItem(newToken, 'valid');

    // Catatan: Anda harus menyimpan token dan status validasi di server untuk aplikasi yang lebih aman
  }, []);

  return (
    <div>
      {token ? (
        <div>
          <p>One-time link generated:</p>
          <p>
            <Link to={`/validate/${token}`}>{`${window.location.origin}/validate/${token}`}</Link>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OneTimeLink;
