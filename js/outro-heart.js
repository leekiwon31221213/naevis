const outroImg = document.getElementById('outro-img');
    let animationFrameId;

    function createHeartsWithAnimation(x, y) {
        createHeart(x, y); // 한 번에 1개의 하트만 생성
        animationFrameId = requestAnimationFrame(() => createHeartsWithAnimation(x, y));
    }

    outroImg.addEventListener('mousemove', function (event) {
        cancelAnimationFrame(animationFrameId); // 이전 애니메이션 중지
        createHeartsWithAnimation(event.pageX, event.pageY);
    });

    outroImg.addEventListener('touchmove', function (event) {
        cancelAnimationFrame(animationFrameId); // 이전 애니메이션 중지
        const touch = event.touches[0];
        createHeartsWithAnimation(touch.pageX, touch.pageY);
    });

    outroImg.addEventListener('mouseleave', function () {
        cancelAnimationFrame(animationFrameId); // 마우스가 나가면 애니메이션 중지
    });

    outroImg.addEventListener('touchend', function () {
        cancelAnimationFrame(animationFrameId); // 터치가 끝나면 애니메이션 중지
    });

    function createHeart(x, y) {
        const heart = document.createElement('img');
        heart.src = 'img/out-heart.svg';
        heart.className = 'heart';

        const offsetX = (Math.random() - 0.5) * 100; // X 축으로의 랜덤 위치
        const offsetY = (Math.random() - 0.5) * 100; // Y 축으로의 랜덤 위치

        heart.style.position = 'absolute';
        heart.style.left = `${x + offsetX}px`;
        heart.style.top = `${y + offsetY}px`;
        heart.style.opacity = '1';
        heart.style.transition = 'opacity 2s ease, transform 2s ease'; // 애니메이션 시간 조정 (2초)

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = '0';
            heart.style.transform = `translate(${offsetX}px, ${offsetY - 50}px)`; // 하트가 떠오르는 애니메이션 효과
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 2000); // 2초 후에 하트 삭제
    }