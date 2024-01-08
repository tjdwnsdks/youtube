/* 
	0. rafce(리액트 자동완성)
		하려면 확장프로그램 'EX7+ React/Redux/React-Native snippets' 설치하면 됨

	1. 파일 셋팅(필요없는 파일 지우고 필요한거 생성)
		- public: favicon.ico, index.html, robots.txt 빼고 다 삭제
					 favicon.svg 생성하기
					 index.html 내용물 변경
		- src: App.js, index.js 빼고 다 삭제(이 둘은 내용 변경)
				 assets 폴더 생성하기
				 README.md 파일 내용 변경
				 .gitignore.json 파일 내용 변경*/
/* 2. 폴더 설명
		- node_modules: 프로젝트에서 사용하는 외부 라이브러리와 패키지들이 저장되는 곳입니다. 
							개발에 필요한 도구와 코드를 더 쉽게 관리할 수 있게 도와줍니다.
		
		- public: 프로젝트의 공용 파일들이 저장되는 곳입니다. 
					주로 HTML 파일과 이미지 같은 정적인 파일들이 이곳에 위치하며, 이 파일들은 웹 브라우저에서 직접 접근할 수 있습니다.
				favicon.svg: 웹 사이트의 아이콘을 나타내는 이미지 파일입니다. 
								 웹 브라우저 탭에 표시되는 작은 아이콘을 설정할 수 있습니다.
				index.html: React 애플리케이션의 진입점인 HTML 파일입니다. 
								브라우저에서 앱을 로드할 때 사용됩니다.
				robots.txt: 이 파일은 웹 사이트의 검색 엔진 크롤러에게 어떤 페이지를 검색할 수 있고 
								어떤 페이지를 검색하지 말아야 하는지에 대한 지침을 제공하는 텍스트 파일입니다

		- src: 실제로 프로젝트의 소스 코드가 저장되는 곳입니다. 
				 여기서 작성한 코드가 애플리케이션의 동작을 정의합니다.
				assets: 이미지나 폰트 등의 정적인 자원 파일들을 저장하는 폴더입니다.
				App.js: React 애플리케이션의 주요 컴포넌트인 App 컴포넌트의 코드가 들어있는 파일입니다. 이 파일에서 애플리케이션의 구조와 기능을 정의할 수 있습니다.
				index.js: React 애플리케이션의 진입점인 JavaScript 파일입니다. 이 파일에서 React 앱을 DOM에 렌더링하는 역할을 합니다.
		
		- .gitignore: Git 버전 관리에서 제외할 파일이나 폴더를 설정하는 파일입니다. 
							node_modules와 같이 불필요한 파일들을 Git에 올리지 않도록 할 때 유용합니다.
		- package-lock.json: 패키지 의존성을 관리하기 위한 자동 생성된 파일입니다. 
									이 파일은 패키지들의 버전 및 의존 관계를 정확하게 유지하기 위해 사용됩니다.
		- package.json: 프로젝트 설정과 의존성 정보를 담고 있는 파일입니다. 
							 프로젝트의 이름, 버전, 필요한 라이브러리 등을 정의할 수 있습니다.
		- README.md: 프로젝트에 대한 설명과 사용 방법을 기술하는 마크다운 파일입니다. 
						다른 개발자들이 프로젝트를 이해하고 사용하는데 도움이 되는 정보를 작성할 수 있습니다. */

/* 3. 필요한 프로그램(라이브러리) 설치하기
		(미리 설치하고 나중에 쓸때 설명할거임)
		- react를 설치합니다. `npx create-react-app 타이틀`
		- react-router-dom을 설치합니다. `npm install react-router-dom`
		- axios를 설치합니다. `npm install axios` (RESTful API 호출할때 사용)
		- react-icons을 설치합니다. `npm install react-icons`
		- react-player를 설치합니다. `npm install react-player` (비디오 및 오디오 소스를 재생하기 위한 라이브러리)
		- sass를 설치합니다. `npm install sass`  (sass 사용가능.-> CSS의 확장된 버전)
		- react-helmet-async를 설치합니다. `npm install react-helmet-async` (동적으로 웹 페이지의 헤더 메타데이터를 관리하기 위한 라이브러리)
		- swiper를 설치합니다. `npm install swiper` 


	* 위에것들 한방에 설치 가능함
		npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper */

/* 3. 깃허브 연동
		1) 새 레포지토리 만들기(public 으로 생성)
		2) 생성하면 나오는 페이지에서 
			"or create a new repository on the command line" 영역에 있는 명령문들 다 복사해서 터미널에 붙여넣기
				- git init  => 빈 Git repository가 다음 주소에 초기화 되었다는 의미이고 작업 디렉토리가 초기화됨을 의미.
									만약 Git 저장소가 이미 초기화되어 있다면 git init을 다시 실행할 필요는 없습니다.
				- git add README.md =>  "add" 명령어로 README.md파일을 스테이지 영역에 넘긴다는 의미
											git은 작업폴더 => 스테이징영역 => 레포지토리영역 으로 구분되어 있음
				- git commit -m "first commit" => commit 명령어는 변경된 기록들을 기록해줍니다.
				- git branch -M main => git에서는 기본 default로 repository를 만들면 branch를 master로 생성하게 됩니다.
											 하지만 git에서 이제 master가 아닌 main를 기본으로 사용하도록 합니다.
				- git remote add origin https://github.com/bitstudy/youtube.git => git remote 명령어는 원격 저장소를 관리하는 명령어 입니다. 위의 명령어를 통해 원격 저장소 주소를 origin이라는 이름으로 등록합니다
				- git push -u origin main =>  원격저장소에 변경된 commit을 즉 README.md 파일을 등록
*/
		