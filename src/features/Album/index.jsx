import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/index';

AlbumFeature.propTypes = {};



function AlbumFeature(props) {
    const albumList=[
        {
            id:1,
            name: 'Gia Đình Là Tất Cả',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/7/3/8/c73868f1550479ffd25a3767f7156ea5.jpg'
        },
        {
            id:2,
            name: 'Pop Ballad Việt Nổi Bật',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/3/e/8/73e8924f6e17821abb57ce29880bd625.jpg'
        },
        {
            id:3,
            name: 'Nam Thần Nhạc Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/8/2/3/a823537b7f878384560e7b8de7dbdc92.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;