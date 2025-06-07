import { useState, useEffect } from "react";
import './MainSection.css';

function MainSection() {
    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState("");

    // NODE_ENV에 따라 API 주소 자동 구분
    const BASE_URL = process.env.NODE_ENV === 'production'
        ? 'https://constitutional-reeta-seongbinbin-329b96ff.koyeb.app'
        : 'http://localhost:8080';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${BASE_URL}/api/station`);
                if (!res.ok) throw new Error(`API 호출 실패 (status: ${res.status})`);
                const result = await res.json();
                setApiData(result.results || []);
            } catch (error) {
                console.error("데이터 불러오기 실패:", error);
            }
        };

        fetchData();
    }, [BASE_URL]);

    const filteredData = apiData.filter(data =>
        data.name && data.name.includes(search)
    );

    return (
        <div>
            <p>MAIN</p>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="대여소 이름 검색"
            />
            {filteredData.length === 0 ? (
                <p>검색 결과가 없습니다.</p>
            ) : (
                filteredData.map(data => (
                    <div key={data.id}>
                        <h3>{data.name}</h3>
                        <p>주소: {data.address}</p>
                        <p>대여 가능 자전거: {data.parking_count}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default MainSection;
