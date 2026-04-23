// css file
import './css/header.css'

// mui
import Container from '@mui/material/Container';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';

function Header(){
    return(
        <div className='header'>
            <Container maxWidth='lg'>
                <div className='flex justify-between items-center'>
                    <div className='text-[34px] font-black py-2'>
                        مساري
                    </div>
                    <div className='flex justify-between items-center '>
                        <ul className='flex '>
                            <li>الجامعات</li>
                            <li>التخصصات</li>
                            <li>حدد مسارك</li>
                            <li><LanguageIcon/></li>
                        </ul>
                        <div>
                            <Button variant="contained" size="large" className='signButton'>
                                تسجيل الدخول
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Header;