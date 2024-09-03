document.querySelector('.alert_btn').addEventListener('click', function (event) {
    const numberOfStars = 20; // 생성할 이미지의 개수
    const baseX = event.pageX;
    const baseY = event.pageY;

    for (let i = 0; i < numberOfStars; i++) {
      setTimeout(() => {
        // 이미지 요소 생성
        const img = document.createElement('img');
        img.src = 'img/part1-star.svg';
        img.className = 'star-img';
        document.body.appendChild(img);

        // 클릭 위치 근처에 이미지 설정 (약간의 랜덤성 부여)
        const offsetX = (Math.random() - 0.5) * 200; // -100px ~ +100px 사이의 랜덤 위치
        const offsetY = (Math.random() - 0.5) * 200; // -100px ~ +100px 사이의 랜덤 위치
        img.style.left = baseX + offsetX + 'px';
        img.style.top = baseY + offsetY + 'px';
        
        // 이미지 보이기
        img.style.display = 'block';

        // 애니메이션 효과 (크기 및 투명도 변화)
        setTimeout(() => {
          img.style.transform = 'scale(2)';
          img.style.opacity = '0';
        }, 0);

        // 애니메이션 종료 후 이미지 삭제
        setTimeout(() => {
          img.remove();
        }, 1000);
      }, i * 100); // 각 이미지가 순차적으로 나타나도록 딜레이 추가
    }
  });